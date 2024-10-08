sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'nsjww/incidentsjww/test/integration/FirstJourney',
		'nsjww/incidentsjww/test/integration/pages/IncidentsList',
		'nsjww/incidentsjww/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('nsjww/incidentsjww') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);