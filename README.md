

## Documentation

i want to create a favicon, so i can use it in this project.

creating a favicon should be a simple process

If you like ico.zhangxiaocai.cn or have a suggestion feel free to say hello. 

Feedback is much appreciated!


## Installation


```bash
git clone https://github.com/jonathantneal/postcss-font-magician.git
```


config nginx


```
    server {
        listen       8001;
        server_name  localhost;
        #access_log  logs/host.access.log  main;

        location / {
			# 设置不缓存
			add_header Cache-Control "no-cache, no-store, must-revalidate";
			add_header Pragma "no-cache";
			add_header Expires "0";
            root   your_path/sm-tools;
            index  index.html ;
        }


        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

then vist it 

```
http://localhost:8001
```