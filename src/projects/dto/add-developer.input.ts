import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsInt } from 'class-validator';

@InputType()
export class AddDeveloperInput {
  @IsNotEmpty({
    message: 'Id is required',
  })
  @IsInt()
  @Field(() => Int)
  id: number;

  @IsNotEmpty({
    message: 'DeveloperId is required',
  })
  @IsInt()
  @Field(() => Int)
  developerId: number;
}
