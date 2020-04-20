let f = []
f[0] = 1;
f[1] = 1;
for(let i=2;i<20;i++){
    f[i] = f[i-1] + f[i-2]
}
console.log(f)