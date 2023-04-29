


import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm/dist"
import { ConfigModule, ConfigService } from '@nestjs/config';



export const TypeOrmConfig: TypeOrmModuleAsyncOptions = {

    imports:[ConfigModule],
    inject: [ConfigService],
    useFactory:  async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
        
        const db_connect: TypeOrmModuleOptions = {
        
            type: "postgres",
    
            host: configService.get("database.host"),
    
            port: configService.get("database.port"),
    
            username: configService.get("database.user"),
    
            password: configService.get("database.password"),
    
            database: configService.get("database.database"),
    
            synchronize:false,
    
            autoLoadEntities: true
        }


        return db_connect;
    }
}
