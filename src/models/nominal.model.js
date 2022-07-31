import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../config/db.config.js";
import AutoNumberField from "../helpers/autoNumberField.helper.js";
import DayjsUTC from "../helpers/date.helper.js";

class Nominal extends Model {}

Nominal.init(
  {
    nominal_id: {
      primaryKey: true,
      type: DataTypes.STRING(25),
      field: "nominal_id",
    },
    coin_quantity: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      field: "coin_quantity",
    },
    coin_name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: "coin_name",
    },
    price: {
      type: DataTypes.BIGINT(30),
      allowNull: false,
      field: "price",
      defaultValue: 0,
    },
  },
  {
    hooks: {
      beforeCreate: async function (nominal, options) {
        const datePrefix = DayjsUTC().format("DDMMYY");
        const ID = await AutoNumberField("nominal_id", datePrefix, 12);
        nominal.dataValues.nominal_id = ID;
      },
      beforeBulkCreate: async function (nominals, options) {
        for (let i = 0; i < nominals.length; i++) {
          const datePrefix = DayjsUTC().format("DDMMYY");
          const ID = await AutoNumberField("nominal_id", datePrefix, 12);
          nominals[i].dataValues.nominal_id = ID;
        }
        options.individualHooks = false;
      },
    },
    sequelize: sequelizeConnection,
    modelName: "Nominals",
    tableName: "gg_nominals",
  }
);

export default Nominal;