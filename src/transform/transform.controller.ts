import { Body, Controller, Post } from '@nestjs/common';
import { TransformPipe } from '../transform.pipe';
@Controller('transform')
export class TransformController {
  @Post('pipe')
  addTodo(@Body(TransformPipe) paramData) {
    return paramData;
  }
}
