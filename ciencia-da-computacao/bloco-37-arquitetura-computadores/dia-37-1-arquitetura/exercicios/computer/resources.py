import subprocess

print(subprocess.check_output(["lscpu"]).decode("utf-8"))