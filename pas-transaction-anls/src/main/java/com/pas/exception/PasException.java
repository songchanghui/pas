package com.pas.exception;

/**
 *  交易处理异常类
 *
 * @author songchanghui
 * @date 2019/2/11
 */
public class PasException extends RuntimeException  {
    static final long serialVersionUID = 7818375828146090155L;

    public PasException() {
        super();
    }

    /**
     * Constructs an GraphException with the specified detail message.
     * @param message
     */
    public PasException(String message) {
        super(message);
    }

    /**
     * Constructs an GraphException with the specified detail message
     * and cause.
     *
     * @param message
     * @param cause
     *
     * @since 1.6
     */
    public PasException(String message, Throwable cause) {
        super(message, cause);
    }

    public PasException(Throwable cause) {
        super(cause);
    }

}
