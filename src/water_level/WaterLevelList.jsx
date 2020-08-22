import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    downloadCSV,
    Filter,
    TextInput,
    FunctionField,
} from "react-admin";
import jsonExport from "jsonexport/dist";

const exporter = (waterLevel) => {
    const waterLevelForExport = waterLevel.map((waterLevel) => {
        const { date, reservoir: { name }, water_level, water_consumption, rainfall, temperature, evaporation } = waterLevel;
        return {
            date,
            name,
            water_level,
            water_consumption,
            rainfall,
            temperature,
            evaporation,
        };
    });

    jsonExport(
        waterLevelForExport,
        {
            headers: [
                "date",
                "name",
                "water_level",
                "water_consumption",
                "rainfall",
                "temperature",
                "evaporation",
            ], // Field order in exported file.
            rename: [
                "Date",
                "Reservoirs Name",
                "Water Level",
                "Water Consumption",
                "Rainfall",
                "Temperature",
                "Evaporation",
            ], // Rename headers in exported file.
        },
        (err, csv) => {
            downloadCSV(csv, "WaterLevel");
        }
    );
};

const WaterLevelFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        {/* TODO : Add autocomplete. */}
        <TextInput label="Reservoir Name" source="reservoir_name" />
    </Filter>
);

const WaterLevelList = (props) => (
    <List
        {...props}
        title="Water Level & Water Consumption"
        exporter={exporter}
        filters={<WaterLevelFilter />}
        perPage={25}
    >
        <Datagrid rowClick="show">
            <FunctionField label="Date" render={record => `${record.date.split('-')[0]} - ${record.date.split('-')[1]}`} />
            <TextField source="reservoir.name" label="Reservoir Name" />
            <NumberField source="water_level" />
            <NumberField source="water_consumption" />
            <NumberField source="rainfall" />
            <NumberField source="temperature" />
            <NumberField source="evaporation" />
        </Datagrid>
    </List>
);

export default WaterLevelList;
