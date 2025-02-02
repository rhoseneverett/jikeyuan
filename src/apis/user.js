import { request } from "@/utils";

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3d3dy5pdGNhc3QuY24vIiwic3ViIjoiMDlmNjY3ZDEtNmZjYS00ZDU3LTlhZmItN2NmNDM0ZDNmNzIzIiwianRpIjoiMGIwMWVmYTEtNmY3Yi00NDIyLWJlODMtMjAwMDY1ZTcxNzEyIiwiaWF0IjoxNzI3MTYzODQ1LCJleHAiOjE3MjcxNjc0NDV9.3bX11t0udPj2IqN7jtPili9CUl6uPZ-Ukl_rakX3TsM

export function loginAPI(formData){
  return request({
    url:'/authorizations',
    method:'POST',
    data: formData
  })
}

export function getProfileAPI (){
  return request({
    url:'/user/profile',
    method:'GET'
  })
}