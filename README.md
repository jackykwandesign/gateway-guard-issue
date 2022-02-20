# gateway-guard-issue

frontend port = 4000
backend port = 3000

When Server up, frontend open will auto connect backend ws
You can see the Guard is not working in Gateway level and handleConnection, only work in scribeMessage level (only emit message will trigger Guard to print context for further processing)
