import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Email', field: 'email' },
            { title: 'Phone Number', field: 'phoneNumber' },
            { title: 'Room Number', field: "roomNumber", type: 'numeric' },
        ],
        data: [
            {
                name: 'Jeremy Pellow',
                email: 'jeremy.pellow@gmail.com',
                phoneNumber: '123-456-7890',
                roomNumber: 201
            },
            {
                name: 'Alex Happe',
                email: 'ahappe@gmail.com',
                phoneNumber: '987-654-1230',
                roomNumber: 301
            },
            {
                name: 'Devin Alexander',
                email: 'dalexander@gmail.com',
                phoneNumber: '564-897-2310',
                roomNumber: 401
            },
            {
                name: 'Grayson Mechler',
                email: 'gmechler@gmail.com',
                phoneNumber: '123-564-8907',
                roomNumber: 501
            },
        ],
    });

    return (
        <MaterialTable
            title="Employee Directory"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}