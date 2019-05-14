<center>
  <pre>
 ███╗   ██╗  ██████╗  ███████╗  ██████╗  ██╗      ██╗      ██████╗ ██╗  ██╗ ███████╗  ██████╗ ██╗  ██╗ ██████╗  
 ████╗  ██║ ██╔═══██╗ ██╔════╝ ██╔═══██╗ ██║      ██║     ██╔════╝ ██║  ██║ ██╔════╝ ██╔════╝ ██║ ██╔╝ ██╔══██╗ 
 ██╔██╗ ██║ ██║   ██║ ███████╗ ██║   ██║ ██║      ██║     ██║      ███████║ █████╗   ██║      █████╔╝  ██████╔╝ 
 ██║╚██╗██║ ██║   ██║ ╚════██║ ██║▄▄ ██║ ██║      ██║     ██║      ██╔══██║ ██╔══╝   ██║      ██╔═██╗  ██╔══██╗ 
 ██║ ╚████║ ╚██████╔╝ ███████║ ╚██████╔╝ ███████╗ ██║     ╚██████╗ ██║  ██║ ███████╗ ╚██████╗ ██║  ██╗ ██║  ██║ 
 ╚═╝  ╚═══╝  ╚═════╝  ╚══════╝  ╚══▀▀═╝  ╚══════╝ ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚══════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ 
  </pre>
</center>
The easy way to test NoSQLi in REST APIs

### install
```
npm i -g nosqli-checkr
nosqli-checkr scan --host="https://nosql-checkr-test.herokuapp.com/api/v1/login" --data='{ "user": "wubba", "pass": "" }' --method="post" --params="pass" --error-message='{"success":false,"result":"user/pass not found"}'
```

### Parameters

- `-h or --host`: Route URL. Ex: https://nosql-checkr-test.herokuapp.com/api/v1/login
- `-hr or --headers`: Route URL. Ex: x-api-key:4170fcff992f965d882784c316ca442ed05c16d2 or x-api-key:4170fcff992f965d882784c316ca442ed05c16d2,token:val,token2:val2
- `-d or --data`: Request data: Ex: { "user": "wubba", "pass": "" }
- `-m or --method`: Request method: Ex: post or POST
- `-p or --params`: Request params which will be exploited: Ex: pass or user,pass
- `-e or --error-message`: The default error message of request. Ex: {"success":false,"result":"user/pass not found"}

### Result

- `Payload`: Is the string used to exploit the request
- `Evil data`: The request data with the payload 😈
- `Data stoled`: The result from the request


### demo
[![asciicast](https://asciinema.org/a/246152.svg)](https://asciinema.org/a/246152)
