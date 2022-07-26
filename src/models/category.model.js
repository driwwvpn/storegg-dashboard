import { DataTypes, Model } from "sequelize";
import ConnectSequelize from "../helpers/connect.helper.js";

class Category extends Model {}

Category.init(
  {
    category_id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      field: "category_id",
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "name",
    },
    description: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
      field: "description",
    },
  },
  {
    sequelize: ConnectSequelize,
    modelName: "Categories",
    tableName: "gg_categories",
    deletedAt: false,
  }
);

export default Category;
