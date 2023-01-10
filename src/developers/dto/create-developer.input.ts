import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail } from 'class-validator';

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

  @Field(() => [Number])
  rolesId: number[];
}
