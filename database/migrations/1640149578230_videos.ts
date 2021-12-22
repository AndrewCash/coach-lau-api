import BaseSchema from "@ioc:Adonis/Lucid/Schema";
import { MapPool, Side } from "Contracts/enums";

export default class Videos extends BaseSchema {
  protected tableName = "videos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string("youtube_id").primary().notNullable;
      table.string("title").notNullable;
      table.enu("map", Object.values(MapPool), {
        useNative: true,
        enumName: "map_pool",
        existingType: true,
      }).notNullable;
      table.enu("side", Object.values(Side), {
        useNative: true,
        enumName: "side",
        existingType: true,
      }).notNullable;
      table.string("player").notNullable;
      table.string("team").notNullable;
      table.string("enemy_team").notNullable;
      table.timestamp("upload_date", { useTz: true }).notNullable;

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    // this.schema.raw('DROP TYPE IF EXISTS "map_pool"');
    // this.schema.raw('DROP TYPE IF EXISTS "side"');
    this.schema.dropTable(this.tableName);
  }
}
