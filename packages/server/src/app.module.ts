import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import ConfigUtil from './utils/config.util';
import { CampaignModule } from './campaign/campaign.module';
import { OrganizerModule } from './organizer/organizer.module';

const databaseUrlPlaceholder = String(ConfigUtil.get('database.url'));
const databasePassword = ConfigUtil.get('database.password');
const databaseName = ConfigUtil.get('database.name');
const databaseUrl = databaseUrlPlaceholder
  .replace('<password>', databasePassword)
  .replace('<dbname>', databaseName);

@Module({
  imports: [
    MongooseModule.forRoot(databaseUrl),
    CampaignModule,
    OrganizerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
