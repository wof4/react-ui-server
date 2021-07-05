const fs = require('fs');
const path = require('path');

class FileListPlugin {
    static defaultOptions = {
        outputFile: 'assets.md',
        exclude: /node_modules/,
    };
    constructor(options = {}) {
        this.options = { ...FileListPlugin.defaultOptions, ...options };
    }

    apply(compiler) {
        const pluginName = FileListPlugin.name;
        const { webpack } = compiler;
        const { Compilation } = webpack;
        const { RawSource } = webpack.sources;
        compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
            compilation.hooks.afterOptimizeTree.tap(pluginName, (chunks, modules) => {
                const pathArray = modules.map((module) =>
                    module.resourceResolveData?.path.replace(/\\/g, '/')
                );
                const arrayPathToBuild = pathArray.filter((path) => path);
                compilation.hooks.processAssets.tap(
                    {
                        name: pluginName,
                        stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
                    },
                    (assets) => {
                        const getFiles = function (dir, files_) {
                            files_ = files_ || [];
                            const files = fs.readdirSync(dir);
                            for (const i in files) {
                                const name = dir + '/' + files[i];
                                if (fs.statSync(name).isDirectory()) {
                                    getFiles(name, files_);
                                } else if (name && !name.toString().includes('node_modules')) {
                                    files_.push(name.replace(/\\/g, '/'));
                                }
                            }
                            return files_;
                        };
                        const arrayFilesToProject = getFiles(process.cwd());
                        const resultArray = [];
                        arrayFilesToProject.forEach((element) => {
                            if ( arrayPathToBuild && arrayPathToBuild.includes(element)) {
                            } else {
                                resultArray.push(element);
                            }
                        });
                        compilation.emitAsset(
                            this.options.outputFile,
                            new RawSource(JSON.stringify(resultArray))
                        );
                    }
                );
            });
        });
    }
}

module.exports = { FileListPlugin };
