import { ApiProperty } from '@nestjs/swagger';

export class CreateUserTweetDto {
  @ApiProperty({ description: 'id' })
  id: number;
  @ApiProperty({ description: '이름' })
  username: string;
  @ApiProperty({ description: '게시글' })
  content: string;
}
