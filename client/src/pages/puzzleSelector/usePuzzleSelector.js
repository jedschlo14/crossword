import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { TreeItem } from 'components';
import { StyledLink } from 'assets/styles/Common.styles';

export const usePuzzleSelector = () => {
    const [jsonData, setJsonData] = useState([]);
    const [treeData, setTreeData] = useState([]);
    const [selectedData, setSelectedData] = useState(null);

    const baseURL = 'http://localhost:8080/puzzle';

    const getYearAndMonth = useCallback(() => {
        var year = null;
        var month = null;

        if (selectedData != null) {
            if (selectedData.includes('/'))
                [year, month] = selectedData.split('/');
            else year = selectedData;
        }

        return [year, month];
    }, [selectedData]);

    const updateJsonData = useCallback(
        (year, month) => {
            var url = baseURL;
            if (year != null) url += '/' + year;
            if (month != null) url += '/' + month;
            axios
                .get(url)
                .then((response) => {
                    if (year == null) {
                        if (jsonData.length === 0) {
                            setJsonData(
                                response.data.map((year) => ({
                                    id: year,
                                    name: year,
                                    children: [],
                                }))
                            );
                        }
                    } else if (month == null) {
                        const yearIndex = jsonData.findIndex(
                            (item) => item.id === year
                        );
                        if (jsonData[yearIndex].children.length === 0) {
                            const newJsonData = [...jsonData];
                            newJsonData[yearIndex].children = response.data.map(
                                (month) => ({
                                    id: year + '/' + month,
                                    name: month,
                                    children: [],
                                })
                            );
                            setJsonData(newJsonData);
                        }
                    } else {
                        const yearIndex = jsonData.findIndex(
                            (item) => item.id === year
                        );
                        const monthIndex = jsonData[
                            yearIndex
                        ].children.findIndex(
                            (item) => item.id === year + '/' + month
                        );
                        if (
                            jsonData[yearIndex].children[monthIndex].children
                                .length === 0
                        ) {
                            const newJsonData = [...jsonData];
                            newJsonData[yearIndex].children[
                                monthIndex
                            ].children = response.data.map((dataItem) => ({
                                id: year + '/' + month + '/' + dataItem,
                                name: dataItem,
                            }));
                            setJsonData(newJsonData);
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        [jsonData]
    );

    useEffect(() => {
        const [year, month] = getYearAndMonth();
        if (year == null && month == null) {
            jsonData.forEach((yearItem) => {
                updateJsonData(yearItem.id, null);
            });
        } else if (year != null && month == null) {
            jsonData[
                jsonData.findIndex((item) => item.id === year)
            ].children.forEach((monthItem) => {
                updateJsonData(year, monthItem.id.split('/')[1]);
            });
        }
    }, [selectedData, getYearAndMonth, jsonData, updateJsonData]);

    useEffect(() => {
        const [year, month] = getYearAndMonth();
        updateJsonData(year, month);
    }, [selectedData, jsonData, getYearAndMonth, updateJsonData]);

    const getTreeData = useCallback((treeItems) => {
        return treeItems.map((treeItemData) => {
            if (treeItemData.children && treeItemData.children.length > 0) {
                return (
                    <TreeItem
                        key={treeItemData.id}
                        itemId={treeItemData.id.toString()}
                        label={treeItemData.name}
                        children={getTreeData(treeItemData.children)}
                    />
                );
            }
            return (
                <StyledLink to={treeItemData.id}>
                    <TreeItem
                        key={treeItemData.id}
                        itemId={treeItemData.id.toString()}
                        label={treeItemData.name}
                    />
                </StyledLink>
            );
        });
    }, []);

    useEffect(() => {
        setTreeData(getTreeData(jsonData));
    }, [jsonData, getTreeData]);

    return {
        treeData,
        selectedData,
        setSelectedData,
    };
};
