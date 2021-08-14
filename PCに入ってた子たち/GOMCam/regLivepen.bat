pushd %~dp0

"%SystemRoot%\Microsoft.NET\Framework64\v4.0.30319\RegAsm.exe" LivePenLib.dll /tlb:LivePenLib.tlb /codebase /u
"%SystemRoot%\Microsoft.NET\Framework64\v4.0.30319\RegAsm.exe" "LivePenLib.dll" /tlb:LivePenLib.tlb /codebase
