write-host "Welcome Developer! `nMoola: Your Finance Tracking Solution" -foreground cyan
write-host "GitHub: https://github.com/vreddi/Moola" -foreground yellow
write-host "Twitter: @vishrutreddi" -foreground yellow
write-host "Web: vishrutreddi.com" -foreground yellow
write-host "Compiling Files With Diagnostics... [MODULE: AMD]" -foreground green

# Compile typescript code with AMD module
tsc --module amd --listFiles --diagnostics --pretty 

write-host "Type 'code' and then press enter to start the project in visual studio code..." -foreground cyan

