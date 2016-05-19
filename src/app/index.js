class Application
{
    run()
    {
        console.log("The application is running now ...");
        $("body").transit({
            color: "white",
            background: "#0767b8"
        });
    }
}

const app = new Application();
app.run();
