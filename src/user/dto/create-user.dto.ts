import { IsNotEmpty } from "class-validator"

export class CreateUserDto {

    
    @IsNotEmpty({message:"First name can't be empty"})
    firstName: string
    
    @IsNotEmpty({message:"Last name can't be empty"})
    lastName: string

}
