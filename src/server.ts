import "./setup";
import app, { init } from "./app";

const port:number = Number(process.env.PORT)

init().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
  });
});
