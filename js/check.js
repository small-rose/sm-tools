// 资源列表配置
        const resources = [
            {
                name: 'google CSS',
                cdnUrl: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
                localUrl: '/assets/google.css',
                type: 'css'
            },
            {
                name: 'google css2',
                cdnUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
                localUrl: '/assets/googlec2.css',
                type: 'css'
            },
            {
                name: 'jszip JS',
                cdnUrl: 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
                localUrl: '/js/libs/jszip/jszip.min.js',
                type: 'js'
            },
            {
                name: 'FileSaver JS',
                cdnUrl: 'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js',
                localUrl: '/js/libs/FileSaver.js/FileSaver.min.js',
                type: 'js'
            }
        ];
        
        // 检查资源是否加载成功的函数
        function isResourceLoaded(resource) {
            if (resource.type === 'css') {
                // 检查CSS是否加载
                const links = document.querySelectorAll('link[rel="stylesheet"]');
                for (let link of links) {
                    if (link.href === resource.cdnUrl || link.href === resource.localUrl) {
                        return Boolean(link.sheet || link.styleSheet);
                    }
                }
                return false;
            } else if (resource.type === 'js') {
                // 检查JS是否加载
                return window[resource.globalVar] !== undefined;
            }
            return false;
        }
        
         
		
		// 加载本地资源
        function loadLocalResource(resource) {
            return new Promise((resolve) => {
            
                console.log('正在加载本地资源...');
                if (resource.type === 'css') {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = resource.localUrl;
                    link.onload = () => {
						console.log('本地css资源加载成功');
                        resolve(true);
                    };
                    link.onerror = () => {
						console.log('本地css资源加载失败');
                        resolve(false);
                    };
                    document.head.appendChild(link);
                } else if (resource.type === 'js') {
                    const script = document.createElement('script');
                    script.src = resource.localUrl;
                    script.onload = () => {
						console.log('本地js资源加载成功');
                        resolve(true);
                    };
                    script.onerror = () => {
						console.log('本地js资源加载成功');
                        resolve(false);
                    };
                    document.head.appendChild(script);
                }
            });
        }
        
        // 文档加载完成后检查资源
        document.addEventListener('DOMContentLoaded', () => {
              
            // 延迟检查以确保资源有足够时间加载
            setTimeout(() => {
                resources.forEach(async (resource) => {
                     console.log('正在检查资源加载...');
                    if (isResourceLoaded(resource)) { 
						console.log('CDN资源加载成功');
                    } else { 
                        console.log(resource.name+'CDN资源未加载，尝试本地资源...');
                        // 尝试加载本地资源
                        await loadLocalResource(resource);
                    }
                });
            }, 2000); // 2秒后检查，给CDN资源足够时间加载
        });
		
		