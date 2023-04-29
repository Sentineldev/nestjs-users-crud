
interface APPConfig {
    port: number,
    env: string
}

interface DatabaseConfig {
    type: string,
    port : number,
    host: string,
    database: string,
    user: string,
    password: string
}


interface Config {
    app: APPConfig,
    database: DatabaseConfig
}



export default (): Config => (
    {
        app: { 
            port: parseInt(process.env.APP_PORT || "3000",10),
            env: process.env.APP_ENV || "development"
         },
        database: {
            type: process.env.DATABASE_TYPE || "postgres",
            port: parseInt(process.env.DATABASE_PORT || "5432",10),
            host: process.env.DATABASE_HOST || "localhost",
            database: process.env.DATABASE || "database",
            user: process.env.DATABASE_USER || "root",
            password: process.env.DATABASE_PASSWORD || "root"
        }
    }
)