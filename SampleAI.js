function SampleAI(str) {
    let ret = str.replace("你", "").replace("吗", "啊").replace("？", "！");
    process.stdout.write("AI says " + ret + "\r\n \r\n");
}
process.stdin.on("data", (input) => {
    SampleAI(input.toString().trim());
});
