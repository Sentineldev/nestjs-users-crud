import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';


import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NotFoundException  } from '@nestjs/common';

@Injectable()
export class UserService {

  
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) {}

  create(createUserDto: CreateUserDto) {

    const new_user = new UserEntity();

    new_user.firstName = createUserDto.firstName;
    new_user.lastName = createUserDto.lastName;


    return this.usersRepository.save(new_user);

  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<UserEntity> {

    const current_user = await this.usersRepository.findOneBy({ id })

    if(!current_user){
      throw new NotFoundException();
    }

    return current_user;
  }

   async update(id: number, updateUserDto: UpdateUserDto) {

    const current_user =  await this.usersRepository.findOneBy({ id })
    if(!current_user){
      throw new NotFoundException();
    } 

    if(updateUserDto.firstName !== undefined){
      current_user.firstName = updateUserDto.firstName;
    }
    if(updateUserDto.lastName !== undefined){
      current_user.lastName = updateUserDto.lastName;
    }

    this.usersRepository.save(current_user);

    return current_user;
  }

  remove(id: number) {
    
    const current_user = this.usersRepository.findOneBy({ id })

    if(!current_user){
      throw new NotFoundException();
    }
    this.usersRepository.delete({ id });
    return "Success";
  }
}
