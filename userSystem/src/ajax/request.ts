import axios , {AxiosRequestConfig,AxiosInstance,AxiosResponse,AxiosPromise} from 'axios'
import {message as messageAlert} from 'antd'

export interface ResponseData{
    code: 0|1|-1;
    message:string,
    data:any
}

class HtttpRequest{
    private mergeConfig(...configs:AxiosRequestConfig[]):AxiosRequestConfig{
        return Object.assign({},...configs);
    }

    public get(url:string,configs:AxiosRequestConfig={}):AxiosPromise{
        const newConfig = this.mergeConfig(configs,{url,method:'GET'});
        return this.request(newConfig);
    }
    public post(url:string,data:any={},configs:AxiosRequestConfig={}):AxiosPromise{
        const newConfig = this.mergeConfig(configs,{url,method:'POST'});
        return this.request(newConfig);
    }


    public request(configs:AxiosRequestConfig):AxiosPromise{
        const instance:AxiosInstance = axios.create();
        this.interceptor(instance);

        return instance(configs)
    }

    private interceptor(instance:AxiosInstance){
        //请求拦截
        instance.interceptors.request.use((config:AxiosRequestConfig)=>{
            config.baseURL = 'http://localhost:3000/';
            return config;
        },(error)=>{
            return Promise.reject(error);
        });

        //返回数据操作
        instance.interceptors.response.use((response: AxiosResponse)=>{
            const {data:{code,message}} = response;
            // console.log(code)
            if(code === 0){
                // console.log('请求成功');
            }else{
                messageAlert.error(message,1);
            }
            return response
        },(error)=>{
            return Promise.reject(error);
        });
    }

}

export default HtttpRequest;