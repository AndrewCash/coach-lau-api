import BaseSchema from "@ioc:Adonis/Lucid/Schema";
import { MapPool } from "Contracts/enums";

export default class Videos extends BaseSchema {
  protected tableName = "videos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("title").notNullable;
      table.string("youtube_link").notNullable;
      table.string("thumbnail");
      table.enu("map", Object.values(MapPool), {
        useNative: true,
        enumName: "map_pool",
        existingType: false,
      }).notNullable;
      table.string("player").notNullable;
      table.string("team").notNullable;
      table.string("enemy_team").notNullable;

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.raw('DROP TYPE IF EXISTS "map_pool"');
    this.schema.dropTable(this.tableName);
  }
}
