import { CreateRoleInput } from './create-role.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

@InputType()
export class UpdateRoleInput extends PartialType(CreateRoleInput) {
  @IsNotEmpty({
    message: 'Id is required',
  })
  @IsInt()
  @Field(() => Int)
  id: number;

  @IsNotEmpty({
    message: 'Name is required',
  })
  @IsString()
  @Field()
  name: string;
}
