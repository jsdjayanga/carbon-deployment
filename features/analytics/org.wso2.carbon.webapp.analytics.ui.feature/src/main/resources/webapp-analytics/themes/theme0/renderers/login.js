var render = function (theme, data, meta, require) {

    if(data.error.length == 0 ){
        theme('index', {
            config: [{
                context: {
                    gadgetsUrlBase: data.config.gadgetsUrlBase
                }
            }],
            title: [{
                context:{
                    page_title:'AS Dashboard'
                }
            }],
            appname: [{
                context:data.appname
            }],
            header: [
                {
                    partial: 'header',
                    context:{
                        user_name: 'dakshika@wso2.com ',
                        user_avatar:'dakshika'
                    }
                }
            ],
            left_side:[
                {
                    partial: 'left_side',
                    context: {
                        nav: data.nav,
                        user_name: 'dakshika@wso2.com ',
                        user_avatar:'dakshika',
                        breadcrumb:'Service Cluster System Statistics'
                    }
                }
            ],
            right_side: [

                {
                    partial: 'login',
                    context:{
                        aspect:'Login' ,
                        appname : data.appname,
                    }
                }
            ]
        });

    }else{

        theme('index', {
            title: [

            ],
            header:[
                {
                    partial: 'header_login'
                }
            ],
            body: [

                {
                    partial: 'error',
                    context:{
                        error:  data.error
                    }
                }
            ]
        });
    }
};
