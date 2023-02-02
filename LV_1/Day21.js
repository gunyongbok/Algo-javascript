function solution(id_list, report, k) {
    let set = new Set(report);
    const newReport = Array.from(set);
    const reportedPeople = [];
    const finalReportedPeople = [];
    let dic = {};
    let result = {};

    for (let i = 0; i < id_list.length; i++) {
        dic[`${id_list[i]}`] = 0;
        result[`${id_list[i]}`] = 0;
    }

    for (let i = 0; i < newReport.length; i++) {
        const reportedPerson = newReport[i].split(' ')[1];
        reportedPeople.push(reportedPerson);
    }

    for (let i = 0; i < reportedPeople.length; i++) {
        dic[`${reportedPeople[i]}`] += 1;
    }

    for (let i = 0; i < id_list.length; i++) {
        if (dic[`${id_list[i]}`] >= k) finalReportedPeople.push(id_list[i]);
    }

    for (let i = 0; i < newReport.length; i++) {
        const reportPerson = newReport[i].split(' ')[0];
        const reportedPerson = newReport[i].split(' ')[1];
        if (finalReportedPeople.includes(reportedPerson)) {
            result[`${reportPerson}`] += 1;
        }
    }

    return Object.values(result);
}
