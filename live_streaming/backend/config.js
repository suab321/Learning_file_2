const config = {
    server:{
        secret:"suab"
    },
    rtmp_server:{
        rtmp:{
            port:1986,
            chunk_size:60000,
            gop_cache:true,
            ping:60,
            pint_timeout:30
        },
        http:{
            port:3002,
            mediaroot:"./server/media",
            allow_origin:'*'
        },
        trans:{
            ffmpeg:'/usr/bin/ffmpeg',
            tasks:[
                {
                    app:'live',
                    hls:true,
                    hlsFlags:'[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
                    dash:true,
                    dashFlag:'[f=dash:window_size=3:extra_window_size=5]'
                }
            ]
        }
    }
}

module.exports = config