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
Easy way to test NoSQLi in REST APIs

### install
```
npm i -g nosqli-checkr
nosqli-checkr scan --host="https://nosql-checkr-test.herokuapp.com/api/v1/login" --data='{ "user": "wubba", "pass": "" }' --method="post" --params="pass" --error-message='{"success":false,"result":"user/pass not found"}'
```

### Parameters

- `-h or --host`: Route URL. Ex: https://nosql-checkr-test.herokuapp.com/api/v1/login
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
