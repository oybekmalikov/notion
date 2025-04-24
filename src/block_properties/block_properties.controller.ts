import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlockPropertiesService } from './block_properties.service';
import { CreateBlockPropertyDto } from './dto/create-block_property.dto';
import { UpdateBlockPropertyDto } from './dto/update-block_property.dto';

@Controller('block-properties')
export class BlockPropertiesController {
  constructor(private readonly blockPropertiesService: BlockPropertiesService) {}

  @Post()
  create(@Body() createBlockPropertyDto: CreateBlockPropertyDto) {
    return this.blockPropertiesService.create(createBlockPropertyDto);
  }

  @Get()
  findAll() {
    return this.blockPropertiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blockPropertiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlockPropertyDto: UpdateBlockPropertyDto) {
    return this.blockPropertiesService.update(+id, updateBlockPropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blockPropertiesService.remove(+id);
  }
}
