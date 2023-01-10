import { CreateProjectInput } from './create-project.input';
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsInt } from 'class-validator';

@InputType()
export class UpdateProjectInput extends CreateProjectInput {
  @IsNotEmpty({
    message: 'Id is required',
  })
  @IsInt()
  @Field(() => Int)
  id: number;
}
