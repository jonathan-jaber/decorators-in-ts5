function myDecorator(target: any, context: any) {
    return function (this: any, ...args: any[]) {
        return "Hello World!";
    }
}

class GitHubClient {
    @myDecorator
    public async getRepos() {
        console.log("Getting GitHub repos...");
    }
}
console.log(new GitHubClient().getRepos());