import {NextResponse} from 'next/server'

export async function GET(request) {

    console.log("\x1b[31m");
    console.log("_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/");
    console.log("_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/");
    console.log("_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/");
    console.log("\x1b[0m");
    console.log(request);

    return NextResponse.json({
            "type": "rich",
            "version": "1.0",
            "title": "埋め込みどうでしょう",
            "author_name": "t4y3",
            "html": "<div style=\"width:100%;height:120px;border:1px solid;font-weight:bold;overflow:hidden;background-color:white;\"><img src=\"https://t4y3.github.io/oembed-sample/img/Bears.jpg\" width=120 height=120 style=\"float:left;margin-right:10px;\"/>くまさん</div>",
            "height": 200,
            "width": 200,
        }, {status: 200}
    )
}