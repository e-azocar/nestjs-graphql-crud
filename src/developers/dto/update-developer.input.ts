import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsInt, IsArray } from 'class-validator';

@InputType()
export class UpdateDeveloperInput {
  @IsNotEmpty({
    message: 'Id is required for update',
  })
  @IsInt()
  @Field(() => Int)
  id: number;

  @IsNotEmpty({
    message: 'Name is required',
  })
  @Field()
  name: string;

  @IsNotEmpty({
    message: 'Email is required',
  })
  @IsEmail()
  @Field()
  email: string;

  @IsArray()
  @Field(() => [Int])
  @IsNotEmpty({
    message: 'Roles is required',
  })
  rolesId: number[];
}
