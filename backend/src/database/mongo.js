import {MongoClient} from 'mongodb';

export const Mongo = { 
    async connect({mongoConnectionString, mongoDbName}){ {
        try {
            const client = new MongoClient(mongoConnectionString);

            await client.connect();
            const db = client.db(mongoDbName);

            this.client = client;
            this.db = db;

            return { Text: 'MongoDB connected successfully' };

        } catch (error) {
            return { Text: 'MongoDB connection error', error  };
            
        }
    }
}};



//mongo senha: qTYCoOfRuPDEZA8p
//usuario: jadsonpaz
//connection string: mongodb+srv://jadsonpaz:qTYCoOfRuPDEZA8p@infopaths.bemgaua.mongodb.net/?appName=infopaths