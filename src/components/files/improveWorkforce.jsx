import React from 'react';
import { Page, Text, View, Document, PDFViewer } from '@react-pdf/renderer';

export const improveWorkforce = ({ name }) => {

    return (

        <Document>
            <Page orientation='landscape' size='A4'>
                <title>Implementation Charter – Improve workforce development supports related to "standard 1”</title>
                <View>
                    <Text>Initiative</Text>
                    <Text>Improve workforce development supports using using “mechanism 1”, “mechanism 2”, and “mechanism n” mechanisms</Text>
                </View>
                <View>
                    <Text>Activities</Text>
                    <Text>1. Identify government agency to lead efforts in identifying workforce development system to improve the performance of “standard 1”
                        •    Identify lead agency and form working group consisting of service providers and relevant government agencies to discuss efforts required to provide
                        professional development support  related to standard: “standard 1”
                        2. Develop draft for a workforce development support system to enhance the performance “standard 1” using “mechanism 1”, “mechanism 2”, and
                        “mechanism n” mechanisms
                        •  Carry out an assessment of all existing workforce development support systems that currently exist related to standard: “standard 1”
                        •  Evaluate global practices for workforce development support systems aimed at improving standard: “standard 1” within related services
                        •    Agree on the identified workforce development support requirements related to standard: “standard 1”
                        •  Work alongside relevant agencies to identify and mobilize resources needed for a workforce development support system using “mechanism1”,
                        “mechanism 2”, and “mechanism n” related to standard: “standard 1”
                        3. Develop governance structure to identify roles and responsibilities of stakeholders impacted by “standard 1”
                        •  Identify agencies and their staff to provide professional development support related to “standard 1”
                        •  Identify rules, procedures, roles and responsibilities across the full decision-making process related to standard: “standard 1”
                        4. Educate and mobilize resources that might be impacted by suggested changes to professional development requirements
                        •  Inform and educate service providers and agencies impacted by suggested updates of professional development requirements related to  improving
                        standard: “standard 1”
                        •  Equip service providers and agencies with resources required to successfully access workforce development support related to “standard 1”
                        5. Roll-out workforce development support system related to improving “standard 1”
                        •  Gain approval from appropriate agencies and introduce suggested workforce development support system </Text>
                </View>
                <View>
                    <Text>Initiative Owner</Text>
                    <Text>Identify Initiative
                        owner</Text>
                    <Text>Timeline</Text>
                    <Text>Estimated Timeline</Text>
                    <Text>Budget</Text>
                    <Text>Estimated Budget</Text>
                </View>
            </Page>
        </Document>

    )
}
