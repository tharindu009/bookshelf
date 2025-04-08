import fs from "fs";
import {fileURLToPath} from "url";
import {dirname,resolve} from "node:path";


const FILE_NAME = fileURLToPath(import.meta.url);
const DIRNAME = dirname(FILE_NAME);
const DB_FILE_PATH = resolve(DIRNAME,"../data/database.json");


export async function readDatabase() {
    try {
      const data = await fs.promises.readFile(DB_FILE_PATH, 'utf8',(err,data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      }
      );
      if (!data) {
        throw new Error("Database is empty");
      }
      return JSON.parse(data);

    } 
    catch (error) {
        console.log(error.message);
      throw error;
    }
  }
  

  export async function writeDatabase(data) {
    try {
      await fs.promises.writeFile(DB_FILE_PATH, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      throw error;
    }
  }

