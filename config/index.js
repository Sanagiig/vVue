function def(dir){
    return {
        entry: "./src/entry-with-compiler.ts", 
        output: {
            path: dir + "/dist",
            filename: "vVue.js"
        },
    }
}

function compiler(dir){
    return  {
        entry: "./test/compiler/index.ts",
        output: {
            path: dir + "/test/compiler/dist",
            filename: "index.js"
        },
    }
}

module.exports = {
    def,
    compiler,
    genConfig(target,dir){
        switch(target){
            case 'compiler':{
                return compiler(dir);
            }
            default :{
                return def(dir);
            }
        }
    }
}