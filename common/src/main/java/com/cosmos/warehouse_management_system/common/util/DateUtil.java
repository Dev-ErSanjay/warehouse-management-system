package com.cosmos.warehouse_management_system.common.util;

import java.time.LocalDateTime;

public final class DateUtil {

    private DateUtil() {
    }

    public static LocalDateTime now() {
        return LocalDateTime.now();
    }
}