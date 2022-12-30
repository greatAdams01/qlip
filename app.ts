import { Application } from "https://deno.land/x/oak/mod.ts";
import nftRoutes from './routes/nft.ts'


const app = new Application();

// app.use((ctx) => {
//   ctx.response.body = "Hello Dave!";
// });

app.use(nftRoutes.routes())
app.use(nftRoutes.allowedMethods())

await app.listen({ port: 8000 });