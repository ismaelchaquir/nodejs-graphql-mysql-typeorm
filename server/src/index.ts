import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";

const main = async () =>{

    await createConnection({
        type: 'mysql',
        database: 'graphqlCRUD',
        username: 'root',
        password: '',
        logging: true,
        synchronize: false,
        entities: [],
    })
    const app = express();
    app.use(cors());
    app.use(express.json())
    // app.use('/graphql', graphqlHTTP({
    //     schema,
    //     graphiql: true
    // }))

    app.use('/',(req,res)=>{
        res.json({message: "hello isma"})
    })
    app.listen(3000, ()=>{
        console.log('Server Running on http://localhost:3000')
    })
}

main().catch((err) => {
    console.log(err);
})