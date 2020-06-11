const NodeMediaServer=require('node-media-server');
const config=require('./config');

nms=new NodeMediaServer(config);

const getStreamKeyFromStreamPath=(Path)=>{
    const rr=Path.split("/");
    return arr[arr.length-1];
}

nms.on("prePublish", async (id,StreamPath,args)=>{
    let streamKey=getStreamKeyFromStreamPath(StreamPath);
    // console.log(id+" "+streamKey);
});
module.exports = nms;