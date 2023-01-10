import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsArray } from 'class-validator';

@InputType()
export class CreateDeveloperInput {
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
