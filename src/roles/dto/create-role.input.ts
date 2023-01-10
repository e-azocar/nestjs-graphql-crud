import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateRoleInput {
  @IsNotEmpty({
    message: 'Name is required',
  })
  @IsString()
  @Field()
  name: string;
}
